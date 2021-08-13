using System;
using System.Linq;

namespace game_set_project
{
    public class Game1
    {
        //Rock Paper Scissors
        private string[] _possibleChoices = {"", "", ""};
        private string _computerChoice = "";
        private string _playerChoice = "";
        private Random _r = new();

        private void SetPossibleChoices()
        {
            int i = 0;
            foreach(string slot in _possibleChoices)
            {
                Console.WriteLine("Set Choice {0}: ", i);
                _possibleChoices[i] = Console.ReadLine();
                i++;
            }
        }
        private string SetComputerChoice()
        {
            _computerChoice = _possibleChoices[_r.Next(3)];
            return _computerChoice;
        }

        private string SetPlayerChoice()
        {
            Console.WriteLine("Please Choose: ");
            for(int i = 0; i < 3; i++)
            {
                Console.WriteLine(_possibleChoices[i]);
            }
            string input = Console.ReadLine();
            if (_possibleChoices.Contains(input))
            {
                _playerChoice = input;
            }
            else
            {
                SetPlayerChoice();
            }
            return _playerChoice;
        }

        private void DecideWinner()
        {
            int playerIndex = Array.IndexOf(_possibleChoices, _playerChoice);
            int enemyIndex = Array.IndexOf(_possibleChoices, _computerChoice);
            Console.WriteLine("Computer Choice: {0}", _computerChoice);
            switch (playerIndex)
            {
                case 0:
                    switch (enemyIndex)
                    {
                        case 0:
                            Console.WriteLine("Tie!");
                            break;
                        case 1:
                            Console.WriteLine("Computer Wins!");
                            break;
                        case 2:
                            Console.Write("Player Wins!");
                            break;
                    }

                    break;
                case 1:
                    switch (enemyIndex)
                    {
                        case 0:
                            Console.WriteLine("Player Wins!");
                            break;
                        case 1:
                            Console.WriteLine("Tie!");
                            break;
                        case 2:
                            Console.Write("Computer Wins!");
                            break;
                    }

                    break;
                case 2:
                    switch (enemyIndex)
                    {
                        case 0:
                            Console.WriteLine("Computer Wins!");
                            break;
                        case 1:
                            Console.WriteLine("Player Wins!");
                            break;
                        case 2:
                            Console.Write("Tie");
                            break;
                    }

                    break;
            }
        }
        public void PlayGame()
        {
            SetPossibleChoices();
            SetComputerChoice();
            SetPlayerChoice();
            DecideWinner();
        }
    }
}