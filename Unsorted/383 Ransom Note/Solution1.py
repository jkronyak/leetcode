class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        map = {}

        for letter in magazine:
            if letter in map:
                map[letter] = map[letter] + 1
            else:
                map[letter] = 1
        for letter in ransomNote:
            if letter in map and map[letter] > 0:
                map[letter] = map[letter] - 1
            else:
                return False

        return True