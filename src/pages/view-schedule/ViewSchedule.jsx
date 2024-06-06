import { useState } from "react";

import { Navbar } from "../../components";

import {
  useGetAllAppointment,
  useDeleteAppointment,
} from "../../queries/appointment";

import Card from "./component/Card";
import FormModal from "./component/FormModal";

import FormUpdateModal from "./component/FormUpdateModal";

const ViewSchedule = () => {
  const { data: allAppointments, refetch } = useGetAllAppointment();
  const deleteAppointmentMutation = useDeleteAppointment();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredAppointments = allAppointments?.filter((appointment) => {
    if (filter === "All") return true;
    return appointment.status === filter;
  });

  const handleView = (item) => {
    setSelectedAppointment(item);
    setUpdateModal(true);
  };

  const handleCloseModal = () => {
    setUpdateModal(false);
    refetch();
    setSelectedAppointment(null);
    stop();
  };

  const handleDelete = async () => {
    try {
      if (selectedAppointment?.id) {
        const { id } = selectedAppointment;
        await deleteAppointmentMutation.mutateAsync({ id });
        setUpdateModal(false);
        refetch();
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const handleCreateModal = () => {
    setIsModalOpen(false);
    refetch();
  };

  const renderUpdateModal = () => {
    return (
      selectedAppointment &&
      selectedAppointment.id && (
        <FormUpdateModal
          open={updateModal}
          title="Edit Appointment"
          data={selectedAppointment}
          onClose={handleCloseModal}
          onDelete={handleDelete}
        />
      )
    );
  };

  const renderCreateModal = () => {
    return (
      <FormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateModal}
        title={"Create Appointment"}
      />
    );
  };

  return (
    <div className=" h-full w-full p-10 space-y-5 bg-blue-50">
      <Navbar onFilterChange={handleFilterChange} />
      <button
        className="btn w-56 border-red-950"
        onClick={() => setIsModalOpen(true)}
      >
        ADD
      </button>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 h-screen">
        {filteredAppointments?.map((item) => (
          <div key={item.id} className="col-span-1">
            <Card data={item} onView={handleView} />
          </div>
        ))}
      </div>
      {renderCreateModal()}
      {renderUpdateModal()}
    </div>
  );
};

export default ViewSchedule;
