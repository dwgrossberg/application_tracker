import requests


def new_user():
    url = 'https://glacial-plains-67311-bdf01ddd306c.herokuapp.com/auth/login'
    data = {
        'username': 'test123456',
        'email': 'test_1234567@gmail.com',
        'password': 'adminadmin'
    }
    response = requests.post(url, json=data)
    print(response.json())
    return response.json()


if __name__ == '__main__':
    new_user()
