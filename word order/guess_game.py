#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🌈✨ 超可愛猜數字遊戲 ✨🌈
和小兔兔一起玩猜數字遊戲吧！
"""

import random

def play_game():
    """開始遊戲主函數"""
    print("🌟" * 25)
    print("   ૮ ˶ᵔ ᵕ ᵔ˶ ა  歡迎來到猜數字樂園！ ૮ ˶ᵔ ᵕ ᵔ˶ ა")
    print("🌟" * 25)
    print("🐰💕 嗨嗨！我是小兔兔～")
    print("🎀 我在心裡想了一個 1 到 100 的數字喔")
    print("✨ 快來猜猜看是多少吧！ (๑˃ᴗ˂)ﻭ")
    print()

    # 生成隨機數字
    target_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 10

    # 可愛的提示訊息
    hints_too_small = [
        "🐰💭 嗯嗯～再大一點點喔！ ⬆️",
        "🌸 太小啦～往上猜猜看！ (ง •̀_•́)ง",
        "🎈 還要再大一些些呢！加油加油！",
        "🌈 數字還要更大喔～你可以的！ ✨",
        "💝 低了低了～再高一點點！ ⤴️"
    ]

    hints_too_large = [
        "🐰💭 哎呀～太大了喔！ ⬇️",
        "🌸 嗯嗯～要小一點才對呢！ (´｡• ᵕ •｡`)",
        "🎈 數字太高啦～往下猜猜看！",
        "🌈 再小一些些就對了！繼續努力！ ✨",
        "💝 高了高了～再低一點點！ ⤵️"
    ]

    while attempts < max_attempts:
        try:
            # 獲取玩家輸入
            remaining = max_attempts - attempts
            hearts = "💖" * min(remaining, 5)
            guess = input(f"🎯 第 {attempts + 1} 次猜測 {hearts} (還有 {remaining} 次機會喔): ")

            # 檢查輸入是否為數字
            guess = int(guess)
            attempts += 1

            # 判斷猜測結果
            if guess < 1 or guess > 100:
                print("🐰❌ 啊咧咧～要輸入 1 到 100 之間的數字喔！ (｡•́︿•̀｡)")
                attempts -= 1  # 不計入錯誤輸入
                continue

            if guess < target_number:
                print(random.choice(hints_too_small))
            elif guess > target_number:
                print(random.choice(hints_too_large))
            else:
                print()
                print("✨🎊" * 12)
                print("   🎉🎉🎉 答對啦！！！ 🎉🎉🎉")
                print(f"   🐰💕 答案就是 {target_number} 喔～")

                # 根據次數給不同的讚美
                if attempts == 1:
                    print("   🌟 哇！一次就猜中！你是天才嗎！ ✨(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
                elif attempts <= 3:
                    print(f"   🏆 只用了 {attempts} 次就猜中！超級厲害！ (ㆁωㆁ)")
                elif attempts <= 5:
                    print(f"   🌈 太棒了！{attempts} 次猜中！好聰明～ ♡(ӦｖӦ｡)")
                elif attempts <= 7:
                    print(f"   🎀 猜了 {attempts} 次就找到答案！不錯不錯！ (๑•̀ㅂ•́)و✧")
                else:
                    print(f"   💝 {attempts} 次猜對！堅持到底真棒！ ٩(◕‿◕｡)۶")

                print("✨🎊" * 12)
                return True

        except ValueError:
            print("🐰💢 嗚嗚～請輸入數字啦！ (｡•́︿•̀｡)")
            continue

    # 超過最大嘗試次數
    print()
    print("🌙" * 25)
    print(f"🐰💤 唉呀～機會用完啦...")
    print(f"💕 正確答案是 {target_number} 喔！")
    print("🌟 沒關係～下次一定可以的！要再試試看嗎？ ٩(๑❛ᴗ❛๑)۶")
    print("🌙" * 25)
    return False

def main():
    """主程序"""
    while True:
        play_game()
        print()
        play_again = input("🎮 要再玩一次嗎？(y/n) ✨: ").lower()

        if play_again != 'y' and play_again != 'yes':
            print()
            print("🐰💕 掰掰～期待下次再一起玩喔！")
            print("✨ (｡･ω･｡)ﾉ♡ Bye Bye～")
            print("🌈⭐🌸💖🎀✨🌟💝")
            break

        print("\n" + "🎪✨" * 15 + "\n")

if __name__ == "__main__":
    main()
