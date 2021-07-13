<?php
    $possible_choices = ['Rock', 'Paper', 'Scissors'];
    $test_choice = 'Paper';
    if (in_array($test_choice, $possible_choices)) {
        echo "Yep its in there.";
    }
