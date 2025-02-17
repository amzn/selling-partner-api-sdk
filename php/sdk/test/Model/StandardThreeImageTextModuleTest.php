<?php
/**
 * StandardThreeImageTextModuleTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardThreeImageTextModule;

/**
 * StandardThreeImageTextModuleTest Class Doc Comment
 *
 * @category    Class
 * @description Three standard images with text, presented across a single row.
 * @package     SpApi
 */
class StandardThreeImageTextModuleTest extends TestCase
{

    private StandardThreeImageTextModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardThreeImageTextModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardThreeImageTextModule"
     */
    public function testStandardThreeImageTextModule()
    {
        $this->assertInstanceOf(StandardThreeImageTextModule::class, $this->model);
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
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
}
