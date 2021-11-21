<?php

namespace Essential;

use OutputPage;
use Skin;

class Hooks {

    /**
     *  https://www.mediawiki.org/wiki/Manual:Hooks/AuthChangeFormFields
     */
    public static function onAuthChangeFormFields( $requests, $fieldInfo, &$formDescriptor, $action ) { 
        // die(var_dump($formDescriptor));
    }

    public static function onBeforePageDisplay( OutputPage $out, Skin $skin ) {
        // some code
        // no need for a return true or return
        // $this->add
        // $skin->getUser();
        // $user = $skin->getUser();
        // echo  $user->isRegistered();
        // die();
    }
}