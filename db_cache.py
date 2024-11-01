class Cache:
    def __init__(self):
        self.internship_set = set()

    def show_data(self):
        return self.internship_set

    def add_data(self, test_tuple):
        self.internship_set.add(test_tuple)

    def check_cache(self, test_tuple):
        if test_tuple in self.internship_set:
            return False
        return True
