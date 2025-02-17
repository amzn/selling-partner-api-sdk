<?php
/**
 * PackingConfigurationTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\PackingConfiguration;

/**
 * PackingConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description A way to configure this packing option. Some box content information sources might not be allowed. Non-standard minimum and maximum box weights might be enforced.
 * @package     SpApi
 */
class PackingConfigurationTest extends TestCase
{

    private PackingConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackingConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackingConfiguration"
     */
    public function testPackingConfiguration()
    {
        $this->assertInstanceOf(PackingConfiguration::class, $this->model);
    }

    /**
     * Test attribute "box_packing_methods"
     */
    public function testPropertyBoxPackingMethods()
    {
        $testValue = [];
        
        $this->model->setBoxPackingMethods($testValue);
        $this->assertEquals($testValue, $this->model->getBoxPackingMethods());
    }

    /**
     * Test attribute "box_requirements"
     */
    public function testPropertyBoxRequirements()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\BoxRequirements();
        
        $this->model->setBoxRequirements($testValue);
        $this->assertEquals($testValue, $this->model->getBoxRequirements());
    }

    /**
     * Test attribute "shipping_requirements"
     */
    public function testPropertyShippingRequirements()
    {
        $testValue = [];
        
        $this->model->setShippingRequirements($testValue);
        $this->assertEquals($testValue, $this->model->getShippingRequirements());
    }
}
