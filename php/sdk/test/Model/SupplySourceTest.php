<?php
/**
 * SupplySourceTest
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
use SpApi\Model\supplySources\v2020_07_01\SupplySource;

/**
 * SupplySourceTest Class Doc Comment
 *
 * @category    Class
 * @description The supply source details, including configurations and capabilities.
 * @package     SpApi
 */
class SupplySourceTest extends TestCase
{

    private SupplySource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SupplySource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SupplySource"
     */
    public function testSupplySource()
    {
        $this->assertInstanceOf(SupplySource::class, $this->model);
    }

    /**
     * Test attribute "supply_source_id"
     */
    public function testPropertySupplySourceId()
    {
        $testValue = 'test';
        
        $this->model->setSupplySourceId($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySourceId());
    }

    /**
     * Test attribute "supply_source_code"
     */
    public function testPropertySupplySourceCode()
    {
        $testValue = 'test';
        
        $this->model->setSupplySourceCode($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySourceCode());
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
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \SpApi\Model\supplySources\v2020_07_01\SupplySourceStatusReadOnly();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }

    /**
     * Test attribute "configuration"
     */
    public function testPropertyConfiguration()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\SupplySourceConfiguration();
        
        $this->model->setConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getConfiguration());
    }

    /**
     * Test attribute "capabilities"
     */
    public function testPropertyCapabilities()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\SupplySourceCapabilities();
        
        $this->model->setCapabilities($testValue);
        $this->assertEquals($testValue, $this->model->getCapabilities());
    }

    /**
     * Test attribute "created_at"
     */
    public function testPropertyCreatedAt()
    {
        $testValue = 'test';
        
        $this->model->setCreatedAt($testValue);
        $this->assertEquals($testValue, $this->model->getCreatedAt());
    }

    /**
     * Test attribute "updated_at"
     */
    public function testPropertyUpdatedAt()
    {
        $testValue = 'test';
        
        $this->model->setUpdatedAt($testValue);
        $this->assertEquals($testValue, $this->model->getUpdatedAt());
    }
}
