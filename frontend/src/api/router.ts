import doctorEndpoints from './doctor'
import userEndpoints from './user'
import departmentEndpoints from './department'
import appointmentEndpoints from './appointment'

const endpoints = {
    doctors: doctorEndpoints,
    users: userEndpoints,
    departments: departmentEndpoints,
    appointments: appointmentEndpoints
}

export default endpoints