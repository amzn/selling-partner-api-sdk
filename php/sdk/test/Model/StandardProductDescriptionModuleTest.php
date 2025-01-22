<?php
/**
 * StandardProductDescriptionModuleTest
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
use OpenAPI\Client\Model\aplusContent\StandardProductDescriptionModule;

/**
 * StandardProductDescriptionModuleTest Class Doc Comment
 *
 * @category    Class
 * @description Standard product description text.
 * @package     OpenAPI\Client
 */
class StandardProductDescriptionModuleTest extends TestCase
{

    private StandardProductDescriptionModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardProductDescriptionModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardProductDescriptionModule"
     */
    public function testStandardProductDescriptionModule()
    {
        $this->assertInstanceOf(StandardProductDescriptionModule::class, $this->model);
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\ParagraphComponent();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
