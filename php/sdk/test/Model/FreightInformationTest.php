<?php
/**
 * FreightInformationTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\FreightInformation;

/**
 * FreightInformationTest Class Doc Comment
 *
 * @category    Class
 * @description Freight information describes the skus being transported. Freight carrier options and quotes will only be returned if the freight information is provided.
 * @package     SpApi
 */
class FreightInformationTest extends TestCase
{

    private FreightInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FreightInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FreightInformation"
     */
    public function testFreightInformation()
    {
        $this->assertInstanceOf(FreightInformation::class, $this->model);
    }

    /**
     * Test attribute "declared_value"
     */
    public function testPropertyDeclaredValue()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Currency();
        
        $this->model->setDeclaredValue($testValue);
        $this->assertEquals($testValue, $this->model->getDeclaredValue());
    }

    /**
     * Test attribute "freight_class"
     */
    public function testPropertyFreightClass()
    {
        $testValue = 'test';
        
        $this->model->setFreightClass($testValue);
        $this->assertEquals($testValue, $this->model->getFreightClass());
    }
}
