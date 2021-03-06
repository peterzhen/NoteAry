Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :notes, only: [:create, :update, :destroy, :show, :index]
    resources :notebooks, only: [:create, :update, :destroy, :show, :index]
    resources :tags, only: [:index, :create, :show, :destroy]
  end

  get 'api/notes/:id/tags', to: 'api/notes#tags'
  delete 'api/tagging/:id', to: 'api/tags#destroyTagging'
end
