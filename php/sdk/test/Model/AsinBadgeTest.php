<?php
/**
 * AsinBadgeTest
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
use SpApi\Model\aplusContent\v2020_11_01\AsinBadge;

/**
 * AsinBadgeTest Class Doc Comment
 *
 * @category    Class
 * @description A flag that provides additional information about an ASIN. This is contextual and can change depending on the request that generated it.
 * @package     SpApi
 */
class AsinBadgeTest extends TestCase
{

    private AsinBadge $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AsinBadge();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AsinBadge"
     */
    public function testAsinBadge()
    {
        $this->assertInstanceOf(AsinBadge::class, $this->model);
    }
}
