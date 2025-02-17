<?php
/**
 * ChargeInstrumentTest
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
use SpApi\Model\finances\v0\ChargeInstrument;

/**
 * ChargeInstrumentTest Class Doc Comment
 *
 * @category    Class
 * @description A payment instrument.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
