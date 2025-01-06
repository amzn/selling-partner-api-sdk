<?php
/**
 * SupplySourceConfigurationTest
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
use OpenAPI\Client\Model\supplySources\SupplySourceConfiguration;

/**
 * SupplySourceConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description Includes configuration and timezone of a supply source.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\supplySources\OperationalConfiguration();
        
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
