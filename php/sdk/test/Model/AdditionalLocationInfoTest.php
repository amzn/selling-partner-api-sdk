<?php
/**
 * AdditionalLocationInfoTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\AdditionalLocationInfo;

/**
 * AdditionalLocationInfoTest Class Doc Comment
 *
 * @category    Class
 * @description Additional location information.
 * @package     SpApi
 */
class AdditionalLocationInfoTest extends TestCase
{

    private AdditionalLocationInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AdditionalLocationInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AdditionalLocationInfo"
     */
    public function testAdditionalLocationInfo()
    {
        $this->assertInstanceOf(AdditionalLocationInfo::class, $this->model);
    }
}
