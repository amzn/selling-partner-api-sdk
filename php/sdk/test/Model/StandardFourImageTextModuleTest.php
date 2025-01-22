<?php
/**
 * StandardFourImageTextModuleTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\aplusContent\StandardFourImageTextModule;

/**
 * StandardFourImageTextModuleTest Class Doc Comment
 *
 * @category    Class
 * @description Four standard images with text, presented across a single row.
 * @package     OpenAPI\Client
 */
class StandardFourImageTextModuleTest extends TestCase
{

    private StandardFourImageTextModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardFourImageTextModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardFourImageTextModule"
     */
    public function testStandardFourImageTextModule()
    {
        $this->assertInstanceOf(StandardFourImageTextModule::class, $this->model);
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "block1"
     */
    public function testPropertyBlock1()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardImageTextBlock();
        
        $this->model->setBlock1($testValue);
        $this->assertEquals($testValue, $this->model->getBlock1());
    }

    /**
     * Test attribute "block2"
     */
    public function testPropertyBlock2()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardImageTextBlock();
        
        $this->model->setBlock2($testValue);
        $this->assertEquals($testValue, $this->model->getBlock2());
    }

    /**
     * Test attribute "block3"
     */
    public function testPropertyBlock3()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardImageTextBlock();
        
        $this->model->setBlock3($testValue);
        $this->assertEquals($testValue, $this->model->getBlock3());
    }

    /**
     * Test attribute "block4"
     */
    public function testPropertyBlock4()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardImageTextBlock();
        
        $this->model->setBlock4($testValue);
        $this->assertEquals($testValue, $this->model->getBlock4());
    }
}
