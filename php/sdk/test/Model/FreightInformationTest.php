<?php
/**
 * FreightInformationTest
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
use OpenAPI\Client\Model\fulfillmentInbound\FreightInformation;

/**
 * FreightInformationTest Class Doc Comment
 *
 * @category    Class
 * @description Freight information describes the skus being transported. Freight carrier options and quotes will only be returned if the freight information is provided.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Currency();
        
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
