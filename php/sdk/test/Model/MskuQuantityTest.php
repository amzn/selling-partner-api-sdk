<?php
/**
 * MskuQuantityTest
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
use OpenAPI\Client\Model\fulfillmentinbound\MskuQuantity;

/**
 * MskuQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description Represents an MSKU and the related quantity.
 * @package     OpenAPI\Client
 */
class MskuQuantityTest extends TestCase
{

    private MskuQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MskuQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MskuQuantity"
     */
    public function testMskuQuantity()
    {
        $this->assertInstanceOf(MskuQuantity::class, $this->model);
    }

    /**
     * Test attribute "msku"
     */
    public function testPropertyMsku()
    {
        $testValue = 'test';
        
        $this->model->setMsku($testValue);
        $this->assertEquals($testValue, $this->model->getMsku());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }
}
