import api from './index'

type Department = {
    id: number;
    name?: string;
    description?: string;
    head_doctor_id?: number;
    createdAt: string;
    updatedAt: string;
}

type Endpoints = {
    getDepartments: () => Promise<Department[]>;
    getDepartment: (idDepartment: number) => Promise<Department>;
    createDepartment: (department: Partial<Department>) => Promise<Department>;
    updateDepartment: (department: Partial<Department>) => Promise<Department>;
    deleteDepartment: (idDepartment: number) => Promise<Department>;
}

const endpoints = {
    getDepartments: async () => {
        return await api('departments')
    },
    getDepartment: async (idDepartment) => {
        return await api(`departments/${idDepartment}`)
    },
    createDepartment: async (department: Partial<Department>) => {
        return await api('departments', {
            method: 'post',
            data: department,
        })
    },
    updateDepartment: async (department: Partial<Department>) => {
        return await api(`departments/${department.id}`, {
            method: 'put',
            data: department,
        })
    },
    deleteDepartment: async (idDepartment) => {
        return await api(`departments/${idDepartment}`, {
            method: 'delete',
        })
    },
}

export default endpoints