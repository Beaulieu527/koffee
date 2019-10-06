class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :address, :phone_number, :token
  has_many :orders, serializer: OrderSerializer 
end
