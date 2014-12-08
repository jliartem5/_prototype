<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of User
 *
 * @author jian
 */
class User extends AppModel {

    public $hasOne = array(
        'config' => array(
            'className' => 'UserConfig'
        ),
        'note_default_config' => array(
            'className' => 'NoteDefaultConfig'
        )
    );

}
