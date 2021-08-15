using System;
using System.Linq;

namespace game_set_project
{
    public class Game1
    {
        //Custom Rock Paper Scissors
        private string[] _possibleChoices = {"", "", ""};
        private string _computerChoice = "";
        private string _playerChoice = "";
        private Random _r = new();

        private void SetPossibleChoices()
        {
            int i = 0;
            foreach(string choice in _possibleChoices)
            {
                Console.WriteLine("!-------------------!\nSet Choice {0}: \n*-------------------*", i);
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
            Console.WriteLine("!-------------------!\nPlease Choose: ");
            for(int i = 0; i < 3; i++)
            {
                Console.WriteLine(_possibleChoices[i]);
            }
                Console.WriteLine("*-------------------*");
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
            Console.WriteLine("!-------------------!\nComputer Choice: {0}\n*-------------------*", _computerChoice);
            switch (playerIndex)
            {
                case 0:
                    switch (enemyIndex)
                    {
                        case 0:
                            Console.WriteLine("!-------------------!\nTie!\n*-------------------*");
                            break;
                        case 1:
                            Console.WriteLine("!-------------------!\nComputer Wins!\n*-------------------*");
                            break;
                        case 2:
                            Console.Write("!-------------------!\nPlayer Wins!\n*-------------------*");
                            break;
                    }

                    break;
                case 1:
                    switch (enemyIndex)
                    {
                        case 0:
                            Console.WriteLine("!-------------------!\nPlayer Wins!\n*-------------------*");
                            break;
                        case 1:
                            Console.WriteLine("!-------------------!\nTie!\n*-------------------*");
                            break;
                        case 2:
                            Console.Write("!-------------------!\nComputer Wins!\n*-------------------*");
                            break;
                    }

                    break;
                case 2:
                    switch (enemyIndex)
                    {
                        case 0:
                            Console.WriteLine("!-------------------!\nComputer Wins!\n*-------------------*");
                            break;
                        case 1:
                            Console.WriteLine("!-------------------!\nPlayer Wins!\n*-------------------*");
                            break;
                        case 2:
                            Console.Write("!-------------------!\nTie!\n*-------------------*");
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