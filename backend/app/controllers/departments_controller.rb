class DepartmentsController < ApplicationController
  before_action :set_department, only: %i[ show update destroy ]

  # GET /departments
  # GET /departments.json
  def index
    @departments = Department.all
  end

  # GET /departments/1
  # GET /departments/1.json
  def show
  end

  # POST /departments
  # POST /departments.json
  def create
    @department = Department.new(department_params)

    if @department.save
      render :show, status: :created, location: @department
    else
      render json: @department.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /departments/1
  # PATCH/PUT /departments/1.json
  def update
    if @department.update(department_params)
      render :show, status: :ok, location: @department
    else
      render json: @department.errors, status: :unprocessable_content
    end
  end

  # DELETE /departments/1
  # DELETE /departments/1.json
  def destroy
    @department.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_department
      @department = Department.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def department_params
      params.require(:department).permit(:name, :description, :head_doctor_id)
    end
end
