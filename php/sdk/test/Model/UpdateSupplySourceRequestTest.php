<?php
/**
 * UpdateSupplySourceRequestTest
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
use OpenAPI\Client\Model\supplySources\UpdateSupplySourceRequest;

/**
 * UpdateSupplySourceRequestTest Class Doc Comment
 *
 * @category    Class
 * @description A request to update the configuration and capabilities of a supply source.
 * @package     OpenAPI\Client
 */
class UpdateSupplySourceRequestTest extends TestCase
{

    private UpdateSupplySourceRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateSupplySourceRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateSupplySourceRequest"
     */
    public function testUpdateSupplySourceRequest()
    {
        $this->assertInstanceOf(UpdateSupplySourceRequest::class, $this->model);
    }

    /**
     * Test attribute "alias"
     */
    public function testPropertyAlias()
    {
        $testValue = 'test';
        
        $this->model->setAlias($testValue);
        $this->assertEquals($testValue, $this->model->getAlias());
    }

    /**
     * Test attribute "configuration"
     */
    public function testPropertyConfiguration()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\SupplySourceConfiguration();
        
        $this->model->setConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getConfiguration());
    }

    /**
     * Test attribute "capabilities"
     */
    public function testPropertyCapabilities()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\SupplySourceCapabilities();
        
        $this->model->setCapabilities($testValue);
        $this->assertEquals($testValue, $this->model->getCapabilities());
    }
}
