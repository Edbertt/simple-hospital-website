Rails.application.routes.draw do
  resources :departments, defaults: { format: 'json' }
  resources :users, defaults: { format: 'json' }
  get "/me", to: "users#me"
  resources :doctors, defaults: { format: 'json' } do
    collection do
      get 'specialities'
    end
  end
  resource :sessions, only: [:create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end

