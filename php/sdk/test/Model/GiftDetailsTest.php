<?php
/**
 * GiftDetailsTest
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
use OpenAPI\Client\Model\vendor\df\orders\GiftDetails;

/**
 * GiftDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Gift details for the item.
 * @package     OpenAPI\Client
 */
class GiftDetailsTest extends TestCase
{

    private GiftDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GiftDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GiftDetails"
     */
    public function testGiftDetails()
    {
        $this->assertInstanceOf(GiftDetails::class, $this->model);
    }

    /**
     * Test attribute "gift_message"
     */
    public function testPropertyGiftMessage()
    {
        $testValue = 'test';
        
        $this->model->setGiftMessage($testValue);
        $this->assertEquals($testValue, $this->model->getGiftMessage());
    }

    /**
     * Test attribute "gift_wrap_id"
     */
    public function testPropertyGiftWrapId()
    {
        $testValue = 'test';
        
        $this->model->setGiftWrapId($testValue);
        $this->assertEquals($testValue, $this->model->getGiftWrapId());
    }
}
