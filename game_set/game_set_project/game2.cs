using System;
namespace game_set_project
{
    public class Game2
    {
        //Battler//
        private Random _r = new();
        private int _turn = 1;
        //Player Stats
        private double _playerHp = 20;
        private int _playerDefense = 5;
        private int _playerAttack = 7;
        //Enemy Stats
        private string[] _possibleEnemies = {"Slime", "Goblin"};
        private string _currentEnemy = "";
        private int _enemyHp;
        private int _enemyDefense;
        private int _enemyAttack;

        public void SetEnemy()
        {
            _currentEnemy = _possibleEnemies[_r.Next(_possibleEnemies.Length)];
            switch (_currentEnemy)
            {
                case "Slime":
                    _enemyHp = 10;
                    _enemyDefense = 3;
                    _enemyAttack = 10;
                    break;
                case "Goblin":
                    _enemyHp = 20;
                    _enemyDefense = 3;
                    _enemyAttack = 15;
                    break;
            }
        }

        private void PlayerAttack()
        {
            int damageDone = _playerAttack - _enemyDefense;
            if (damageDone > 0)
            {
                _enemyHp -= damageDone;
                Console.WriteLine("*------------------------*\nPlayer Dealt {0} Damage!", damageDone);
            }
            else
            {
                Console.WriteLine("*------------------------*\nPlayer Missed!");
            }
        }

        private void EnemyAttack()
        {
            int damageDone = _enemyAttack - _playerDefense;
            if (damageDone > 0)
            {
                _playerHp -= damageDone;
                Console.WriteLine("{1} Dealt {0} Damage!\n*-----------------------*", damageDone, _currentEnemy);
            }
            else
            {
                Console.WriteLine("{0} Missed!\n*-----------------------*", _currentEnemy);
            }
        }

        private void CheckBattleEnd()
        {
            if (_enemyHp <= 0)
            {
                Console.WriteLine("You Won!");
                Environment.Exit(0);
            }
            else
            {
                PlayGame();
            }
            if (_playerHp <= 0)
            {
                Console.WriteLine("You Died!");
                Environment.Exit(0);
            }
            else
            {
                PlayGame();
            }
            
        }

        private void Turn()
        {
            EnemyAttack();
            CheckBattleEnd();
            
        }

        public void PlayGame()
        {
            Console.WriteLine("!-----------------------!\nTurn {3}\nCurrent HP:\n{0}: {1}\nPlayer: {2}",_currentEnemy, _enemyHp, _playerHp, _turn);
            Console.WriteLine("What Do You Want To Do?\nOptions:\nAttack\nHeal\n!-----------------------!");
            string playerChoice = Console.ReadLine();
            switch (playerChoice)
            {
                case "Attack":
                    _turn++;
                    PlayerAttack();
                    Turn();
                    Console.Write(_turn);
                    break;
                case "Heal":
                    int chance = _r.Next(100);
                    if (chance > 50)
                    {
                        _playerHp += _playerHp * 0.5;
                        Console.WriteLine("Player Healed for {0}\n*-----------------------*", _playerHp*0.5);
                        Turn();
                    }
                    else
                    {
                        Console.WriteLine("Heal Missed!\n*-----------------------*");
                        Turn();
                    }
                    break;
            }
            
        }
    }
}