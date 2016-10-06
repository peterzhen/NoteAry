Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :notes, only: [:create, :update, :destroy, :show, :index]
    resources :notebooks, only: [:create, :update, :destroy, :show, :index]
  end

end
