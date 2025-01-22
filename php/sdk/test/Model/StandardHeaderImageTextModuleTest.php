<?php
/**
 * StandardHeaderImageTextModuleTest
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
use OpenAPI\Client\Model\aplusContent\StandardHeaderImageTextModule;

/**
 * StandardHeaderImageTextModuleTest Class Doc Comment
 *
 * @category    Class
 * @description Standard headline text, an image, and body text.
 * @package     OpenAPI\Client
 */
class StandardHeaderImageTextModuleTest extends TestCase
{

    private StandardHeaderImageTextModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardHeaderImageTextModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardHeaderImageTextModule"
     */
    public function testStandardHeaderImageTextModule()
    {
        $this->assertInstanceOf(StandardHeaderImageTextModule::class, $this->model);
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
     * Test attribute "block"
     */
    public function testPropertyBlock()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardImageTextBlock();
        
        $this->model->setBlock($testValue);
        $this->assertEquals($testValue, $this->model->getBlock());
    }
}
