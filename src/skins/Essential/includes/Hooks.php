<?php
/**
 *  https://www.mediawiki.org/wiki/Manual:Hooks/
 */

namespace Essential;

use OutputPage;
use Skin;
use Html;
use ParserOutput;

    
class Hooks {


    public static function onAuthChangeFormFields( $requests, $fieldInfo, &$formDescriptor, $action ) { 
        //
    }

    public static function onBeforePageDisplay( OutputPage $out, Skin $skin ) {
        //
    }

	public static function onOutputPageParserOutput( OutputPage &$out, ParserOutput $parserOutput ) {
        
        $config = $out->getConfig();

        foreach($config->get('ResourceOpenGraphMeta') as $item) {
            $property = $item['property'];
            $content = $item['content'];

            $out->addHeadItem(
                "meta:property:$property",
                '	' . Html::element( 'meta', [
                    'property' => $property,
                    'content' => $content,
                ] ) . "\n"
            );
        }
    }



    public static function onSpecialSearchResults( $term, $titleMatches, $textMatches ) { 
        //  echo gettype($textMatches);
        // echo $textMatches->getTotalHits();
        // die();

    }
}