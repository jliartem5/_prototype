<h1>Inscription</h1>
<?php
    echo $this->Form->create('User', array('controller'=>'user', 'action'=>'register'));
    echo $this->Form->input('email');
    echo $this->Form->input('password');
    echo $this->Form->end('Register');
    echo $this->Session->flash();
?>