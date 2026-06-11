import api from './index'

type Appointment = {
    id: number;
    full_name?: string;
    email?: string;
    phone_number?: string;
    date?: string;
    appointment_time?: string;
    doctor_id?: number;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

type Endpoints = {
    getAppointments: () => Promise<Appointment[]>;
    getAppointment: (idAppointment: number) => Promise<Appointment>;
    createAppointment: (appointment: Partial<Appointment>) => Promise<Appointment>;
    updateAppointment: (appointment: Partial<Appointment>) => Promise<Appointment>;
    deleteAppointment: (appointment: Partial<Appointment>) => Promise<Appointment>;
}

const endpoints ={
    getAppointments: async () => {
        return await api('appointments')
    },
    getAppointment: async (idAppointment: any) => {
        return await api(`appointments/${idAppointment}`)
    },
    createAppointment: async (appointment: Partial<Appointment>) => {
        return await api('appointments', {
            method: 'post',
            data: appointment,
        })
    },
    updateAppointment: async (appointment: Partial<Appointment>) => {
        return await api(`appointments/${appointment.id}`, {
            method: 'put',
            data: appointment,
        })
    },
    deleteAppointment: async (idAppointment: any) => {
        return await api(`appointments/${idAppointment}`, {
            method: 'delete',
        })
    }
}
    
export default endpoints