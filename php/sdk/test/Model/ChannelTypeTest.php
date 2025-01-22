<?php
/**
 * ChannelTypeTest
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
use OpenAPI\Client\Model\shipping\ChannelType;

/**
 * ChannelTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The shipment source channel type.
 * @package     OpenAPI\Client
 */
class ChannelTypeTest extends TestCase
{

    private ChannelType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ChannelType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ChannelType"
     */
    public function testChannelType()
    {
        $this->assertInstanceOf(ChannelType::class, $this->model);
    }
}
