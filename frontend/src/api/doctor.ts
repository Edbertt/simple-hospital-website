import api from './index'

type Doctor = {
    id: number;
    name?: string;
    speciality_id?: number;
    department_id?: number;
    experience?: number;
    createdAt: string;
    updatedAt: string;
}

type Speciality = {
    id: string;
    title: string;
}

type Endpoints = {
    getDoctors: () => Promise<Doctor[]>;
    getDoctor: (idDoctor: number) => Promise<Doctor>;
    createDoctor: (doctor: Partial<Doctor>) => Promise<Doctor>;
    updateDoctor: (doctor: Partial<Doctor>) => Promise<Doctor>;
    deleteDoctor: (doctor: Partial<Doctor>) => Promise<Doctor>;
    speciality: () => Promise<Speciality>;
}

const endpoints ={
    getDoctors: async () => {
        return await api('doctors')
    },
    getDoctor: async (idDoctor: any) => {
        return await api(`doctors/${idDoctor}`)
    },
    createDoctor: async (doctor: Partial<Doctor>) => {
        return await api('doctors', {
            method: 'post',
            data: doctor,
        })
    },
    updateDoctor: async (doctor: Partial<Doctor>) => {
        return await api(`doctors/${doctor.id}`, {
            method: 'put',
            data: doctor,
        })
    },
    deleteDoctor: async (doctor: Partial<Doctor>) => {
        return await api(`doctors/${doctor.id}`, {
            method: 'delete',
        })
    },
    speciality: async () => {
        const res = await api('doctors/specialities')
        return Object.entries(res).map(([id, title]) => ({ id, title }))
    }
}
	
export default endpoints