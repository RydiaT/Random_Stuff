using System;

namespace game_set_project
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Choose A Game: \nGame 1: Custom Rock Paper Scissors\nGame 2: Turn Based Battles");
            string gameChoice = Console.ReadLine();
            switch (gameChoice)
            {
                case "Game 1":
                    Game1 game1 = new Game1();
                    game1.PlayGame();
                    break;
                case "Game 2":
                    Game2 game2 = new Game2();
                    game2.SetEnemy();
                    game2.PlayGame();
                    break;
                default:
                    Console.WriteLine("Invalid Game");
                    break;
            }
        }
    }
}