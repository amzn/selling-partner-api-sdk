<?php
/**
 * ChargeInstrumentTest
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
use OpenAPI\Client\Model\finances\v0\ChargeInstrument;

/**
 * ChargeInstrumentTest Class Doc Comment
 *
 * @category    Class
 * @description A payment instrument.
 * @package     OpenAPI\Client
 */
class ChargeInstrumentTest extends TestCase
{

    private ChargeInstrument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ChargeInstrument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ChargeInstrument"
     */
    public function testChargeInstrument()
    {
        $this->assertInstanceOf(ChargeInstrument::class, $this->model);
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }

    /**
     * Test attribute "tail"
     */
    public function testPropertyTail()
    {
        $testValue = 'test';
        
        $this->model->setTail($testValue);
        $this->assertEquals($testValue, $this->model->getTail());
    }

    /**
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\Currency();
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
