<?php
/**
 * StandardFourImageTextQuadrantModuleTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\aplusContent\v2020_11_01\StandardFourImageTextQuadrantModule;

/**
 * StandardFourImageTextQuadrantModuleTest Class Doc Comment
 *
 * @category    Class
 * @description Four standard images with text, presented on a grid of four quadrants.
 * @package     SpApi
 */
class StandardFourImageTextQuadrantModuleTest extends TestCase
{

    private StandardFourImageTextQuadrantModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardFourImageTextQuadrantModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardFourImageTextQuadrantModule"
     */
    public function testStandardFourImageTextQuadrantModule()
    {
        $this->assertInstanceOf(StandardFourImageTextQuadrantModule::class, $this->model);
    }

    /**
     * Test attribute "block1"
     */
    public function testPropertyBlock1()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageTextBlock();
        
        $this->model->setBlock1($testValue);
        $this->assertEquals($testValue, $this->model->getBlock1());
    }

    /**
     * Test attribute "block2"
     */
    public function testPropertyBlock2()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageTextBlock();
        
        $this->model->setBlock2($testValue);
        $this->assertEquals($testValue, $this->model->getBlock2());
    }

    /**
     * Test attribute "block3"
     */
    public function testPropertyBlock3()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageTextBlock();
        
        $this->model->setBlock3($testValue);
        $this->assertEquals($testValue, $this->model->getBlock3());
    }

    /**
     * Test attribute "block4"
     */
    public function testPropertyBlock4()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageTextBlock();
        
        $this->model->setBlock4($testValue);
        $this->assertEquals($testValue, $this->model->getBlock4());
    }
}
