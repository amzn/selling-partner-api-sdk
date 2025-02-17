<?php
/**
 * SupplySourceConfigurationTest
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
use SpApi\Model\supplySources\v2020_07_01\SupplySourceConfiguration;

/**
 * SupplySourceConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description Includes configuration and timezone of a supply source.
 * @package     SpApi
 */
class SupplySourceConfigurationTest extends TestCase
{

    private SupplySourceConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SupplySourceConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SupplySourceConfiguration"
     */
    public function testSupplySourceConfiguration()
    {
        $this->assertInstanceOf(SupplySourceConfiguration::class, $this->model);
    }

    /**
     * Test attribute "operational_configuration"
     */
    public function testPropertyOperationalConfiguration()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\OperationalConfiguration();
        
        $this->model->setOperationalConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getOperationalConfiguration());
    }

    /**
     * Test attribute "timezone"
     */
    public function testPropertyTimezone()
    {
        $testValue = 'test';
        
        $this->model->setTimezone($testValue);
        $this->assertEquals($testValue, $this->model->getTimezone());
    }
}
