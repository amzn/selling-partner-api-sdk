<?php
/**
 * ReasonTest
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
use SpApi\Model\listings\restrictions\v2021_08_01\Reason;

/**
 * ReasonTest Class Doc Comment
 *
 * @category    Class
 * @description A reason for the restriction, including path forward links that may allow Selling Partners to remove the restriction, if available.
 * @package     SpApi
 */
class ReasonTest extends TestCase
{

    private Reason $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Reason();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Reason"
     */
    public function testReason()
    {
        $this->assertInstanceOf(Reason::class, $this->model);
    }

    /**
     * Test attribute "message"
     */
    public function testPropertyMessage()
    {
        $testValue = 'test';
        
        $this->model->setMessage($testValue);
        $this->assertEquals($testValue, $this->model->getMessage());
    }

    /**
     * Test attribute "reason_code"
     */
    public function testPropertyReasonCode()
    {
        $enumInstance = new Reason();
        $allowedValues = $enumInstance->getReasonCodeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getReasonCode());
    }

    /**
     * Test attribute "links"
     */
    public function testPropertyLinks()
    {
        $testValue = [];
        
        $this->model->setLinks($testValue);
        $this->assertEquals($testValue, $this->model->getLinks());
    }
}
