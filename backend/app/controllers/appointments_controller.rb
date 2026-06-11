class AppointmentsController < ApplicationController
  before_action :set_appointment, only: %i[ show update destroy ]

  # GET /appointments
  # GET /appointments.json
  def index
    @appointments = Appointment.all
  end

  # GET /appointments/1
  # GET /appointments/1.json
  def show
  end

  # POST /appointments
  # POST /appointments.json
  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render :show, status: :created, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /appointments/1
  # PATCH/PUT /appointments/1.json
  def update
    if @appointment.update(appointment_params)
      render :show, status: :ok, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_content
    end
  end

  # DELETE /appointments/1
  # DELETE /appointments/1.json
  def destroy
    @appointment.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      @appointment = Appointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def appointment_params
      params.require(:appointment).permit(:full_name, :email, :phone_number, :date, :appointment_time, :doctor_id, :notes)
    end
end
