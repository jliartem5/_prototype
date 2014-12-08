<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of UserController
 *
 * @author jian
 */
class UsersController extends AppController{

    var $components= array('Session');
    
    public function login(){
        
    }
    
    public function register(){
        if($this->request->is('post')){
            $this->User->create();
            $now = new DateTime();
            
            $this->request->data['User']['create_date'] = $now->format('Y-m-d H:i:s');
                    
            if($this->User->save($this->request->data)){
                $this->Session->setFlash('User registred');
            }else{
                $this->Session->setFlash($this->User->validationError);
            }
        }
        return $this->redirect(array('controller'=>'pages','action'=>'index'));
    }
    
    public function profil() {
        
    }

}
