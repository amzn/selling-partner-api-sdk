<?php
/**
 * StandardImageTextBlockTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\apluscontent\StandardImageTextBlock;

/**
 * StandardImageTextBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content standard image and text box block.
 * @package     OpenAPI\Client
 */
class StandardImageTextBlockTest extends TestCase
{

    private StandardImageTextBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardImageTextBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardImageTextBlock"
     */
    public function testStandardImageTextBlock()
    {
        $this->assertInstanceOf(StandardImageTextBlock::class, $this->model);
    }

    /**
     * Test attribute "image"
     */
    public function testPropertyImage()
    {
        
        $testValue = new \OpenAPI\Client\Model\apluscontent\ImageComponent();
        
        $this->model->setImage($testValue);
        $this->assertEquals($testValue, $this->model->getImage());
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \OpenAPI\Client\Model\apluscontent\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \OpenAPI\Client\Model\apluscontent\ParagraphComponent();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
