<?php
/**
 * ExpirationDetailsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\awd\ExpirationDetails;

/**
 * ExpirationDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The expiration details of the inventory. This object will only appear if the details parameter in the request is set to &#x60;SHOW&#x60;.
 * @package     OpenAPI\Client
 */
class ExpirationDetailsTest extends TestCase
{

    private ExpirationDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExpirationDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExpirationDetails"
     */
    public function testExpirationDetails()
    {
        $this->assertInstanceOf(ExpirationDetails::class, $this->model);
    }

    /**
     * Test attribute "expiration"
     */
    public function testPropertyExpiration()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiration());
    }

    /**
     * Test attribute "onhand_quantity"
     */
    public function testPropertyOnhandQuantity()
    {
        
        $testValue = new int();
        
        $this->model->setOnhandQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getOnhandQuantity());
    }
}
