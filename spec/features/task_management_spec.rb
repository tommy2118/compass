require "rails_helper"

RSpec.feature "Task management", type: :feature do
  scenario "creation", js: true do
    task_title = "title"
    visit new_task_path
    fill_in :task_title, with: task_title
    select "General", from: "category"

    message = accept_alert do
      click_button "Create Task"
    end

    expect(message).to eq("Task created successfully.")
  end

  scenario "read", js: true do
    task = instance_double("task")
    visit task_path(task)

    expect(page).to have_text(task.title)
  end
end
