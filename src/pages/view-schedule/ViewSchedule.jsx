import "react-toastify/dist/ReactToastify.css";

import { Bounce, ToastContainer, toast } from "react-toastify";

import {
  Navbar,
  SvgIcons,
  Card,
  FormModal,
  FormUpdateModal,
} from "~/components";

import {
  useGetAllAppointment,
  useDeleteAppointment,
} from "~/queries/appointment";

import useViewSchedule from "~/store/useViewSchedule";

const ViewSchedule = () => {
  const { data: allAppointments, refetch } = useGetAllAppointment();
  const deleteAppointmentMutation = useDeleteAppointment();

  const {
    isModalOpen,
    updateModal,
    selectedAppointment,
    filter,
    setIsModalOpen,
    setUpdateModal,
    setSelectedAppointment,
    setFilter,
  } = useViewSchedule();

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

  const handleUpdate = () => {
    setUpdateModal(false);
    refetch();
    setSelectedAppointment(null);
    toast.success("Successfully updated!");
    stop();
  };

  const handleCloseUpdate = () => {
    setUpdateModal(false);
    setSelectedAppointment(null);
  };

  const handleDelete = async () => {
    try {
      if (selectedAppointment?.id) {
        const { id } = selectedAppointment;
        await deleteAppointmentMutation.mutateAsync({ id });
        setUpdateModal(false);
        refetch();
        toast.success("Successfully deleted!");
      }
    } catch (error) {
      toast.error("Error deleting appointment:", error);
    }
  };

  const handleCreateModal = () => {
    setIsModalOpen(false);
    refetch();
    toast.success("Successfully created!");
  };

  const renderUpdateModal = () => {
    return (
      selectedAppointment &&
      selectedAppointment.id && (
        <FormUpdateModal
          open={updateModal}
          title="Edit Appointment"
          data={selectedAppointment}
          onClose={handleCloseUpdate}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
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

  const renderAppointment = () => {
    return filteredAppointments?.length === 0 ? (
      <div className="font-bold text-center h-screen">
        <p>NO APPOINTMENT AVAILABLE</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 h-full sm:h-screen">
        {filteredAppointments?.map((item) => (
          <div key={item.id} className="col-span-1">
            <Card data={item} onView={handleView} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <main className=" h-full w-full p-10 space-y-5 bg-blue-50">
      <Navbar onFilterChange={handleFilterChange} />
      <button
        className="btn btn-outline m-1 w-56"
        onClick={() => setIsModalOpen(true)}
      >
        <SvgIcons name={"ic_add"} style={{ height: 20, width: 20 }} />
        ADD APPOINTMENT
      </button>

      {renderAppointment()}
      {renderCreateModal()}
      {renderUpdateModal()}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </main>
  );
};

export default ViewSchedule;
