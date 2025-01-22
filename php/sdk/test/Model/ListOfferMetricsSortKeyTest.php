<?php
/**
 * ListOfferMetricsSortKeyTest
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
use OpenAPI\Client\Model\replenishment\ListOfferMetricsSortKey;

/**
 * ListOfferMetricsSortKeyTest Class Doc Comment
 *
 * @category    Class
 * @description The attribute to use to sort the results.
 * @package     OpenAPI\Client
 */
class ListOfferMetricsSortKeyTest extends TestCase
{

    private ListOfferMetricsSortKey $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOfferMetricsSortKey();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOfferMetricsSortKey"
     */
    public function testListOfferMetricsSortKey()
    {
        $this->assertInstanceOf(ListOfferMetricsSortKey::class, $this->model);
    }
}
