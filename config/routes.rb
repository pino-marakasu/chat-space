Rails.application.routes.draw do
  root 'groups#index'
  root 'users#index'
  
  devise_for :users
  # , contollers: {
  #   registrations: 'users/registrations',
  #   sessions: 'users/sessions'
  # }
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
    
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end
  # devise_scope :user do
  #   get "sign_in", to: "users/sessions#new"
  #   get "sign_out", to: "users/sessions#destroy"
  # end
 
