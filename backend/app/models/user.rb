class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: true

    USER_TYPE = {
        0 => 'User',
        1 => 'Admin'
    }

    def user_type_caption
        USER_TYPE[self.type_id.to_i]
    end
end
