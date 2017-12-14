class TasksController < ApplicationController
  skip_before_action :verify_authenticity_token

  expose(:task)
  expose(:tasks) { Task.all.order(:title) }

  def index
  end

  def new
  end

  def create
    respond_to do |format|
      format.json do
        if task.save
          render :json => task
        else
          render :json => {:errors => task.errors.messages }, :status => 422
        end
      end
    end
  end

  def show
  end

  private

  def task_params
    params.require(:task).permit(:category, :title, :description)
  end
end
